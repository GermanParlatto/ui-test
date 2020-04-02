import { TestBed } from '@angular/core/testing';
import {FAQS} from '../../../../api/db';

import { FaqsService } from './faqs.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FaqsService', () => {
  let faqsService: FaqsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule
      ],
      providers: [
        FaqsService
      ]
  });

  faqsService = TestBed.get(FaqsService),
  httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should retrieve all faqs', () => {

    faqsService.getFaqList()
        .subscribe(faqs => {

            expect(faqs).toBeTruthy('No FAQs returned');

            expect(faqs.length).toBe(5,
                "incorrect number of FAQs");

            const faq = faqs.find(faq => faq.id == '5');

            expect(faq.question).toBe(
              "What happens if my vehicle needs repairing and it's outside of business hours?");

        });

    const req = httpTestingController.expectOne('/api/faqs');

    expect(req.request.method).toEqual("GET");

    req.flush(FAQS);

    });

    afterEach(() => {
      httpTestingController.verify();
    });

});
