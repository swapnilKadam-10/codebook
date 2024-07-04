import { Accordion } from "./Accordion";

export const Faq = () => {

  const faqs = [
      {
        "id": 1,
        "question": "How do I purchase eBooks on CodeBook?",
        "answer": "To purchase eBooks on CodeBook, browse our collection, select your desired eBook, and proceed to checkout. Follow the prompts to complete your purchase securely."
      },
      {
        "id": 2,
        "question": "Can I access my purchased eBooks on mobile devices?",
        "answer": "Yes, you can access your eBooks on mobile devices. Download our mobile app on iOS or Android, log in with your CodeBook account, and access your purchased eBooks conveniently on the go."
      },
      {
        "id": 3,
        "question": "Do you offer refunds?",
        "answer": "No, we don`t have refund policy."
      },
      {
        "id": 4,
        "question": "What formats are available for downloaded eBooks?",
        "answer": "Our eBooks are typically available in PDF and ePub formats for download. You can choose the format that best suits your reading preferences."
      },
      {
        "id":5,
        "question":"Do I need an internet connection to read eBooks purchased on CodeBook?",
        "answer": "Once you've downloaded your purchased eBook, you can read it offline using compatible eBook reader apps. An internet connection is only required for initial download and updates."

      },
      {
        "id":6,
        "question":"How can I contact customer support if I have issues with my purchase?",
        "answer": "If you encounter any issues with your eBook purchase or need assistance, please reach out to our customer support team at support@codebook.com. We're here to help resolve any concerns promptly."
      }
  ];
  
return (
  <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
    <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
          <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            { faqs.map( (faq) => (
              <Accordion key={faq.id} faq={faq} />
            ))}            
          </div>
    </section>
)
}
