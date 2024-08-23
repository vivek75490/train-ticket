import React from "react";

const Faqs = () => {
  const railwayReservationFaqs = [
    {
      id: 1,
      question: "How do I book a train ticket online?",
      answer:
        "To book a train ticket online, visit our website or mobile app, log in to your account, select the journey details, choose the train, and follow the steps to complete the reservation.",
    },
    {
      id: 2,
      question:
        "What information do I need to provide during the reservation process?",
      answer:
        "You'll need to provide details such as the departure and arrival stations, travel date, class of travel, and the number of passengers. Make sure to have valid identification for each passenger.",
    },
    {
      id: 3,
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, you can modify or cancel your reservation online through your account. However, please note that there may be modification or cancellation fees depending on the time of the request and the type of ticket.",
    },
    {
      id: 4,
      question: "How can I check the train schedule and seat availability?",
      answer:
        "You can check the train schedule and seat availability on our website or mobile app. Enter your journey details, and the system will display the available trains along with their schedules and seat availability.",
    },
    {
      id: 5,
      question: "What types of classes are available for reservation?",
      answer:
        "We offer various classes such as Sleeper Class, AC Class, and more. The availability of classes depends on the specific train. You can choose the class that best suits your preferences and budget.",
    },
    {
      id: 6,
      question: "Is it possible to get a refund for a canceled ticket?",
      answer:
        "Refunds for canceled tickets are subject to our refund policy. Generally, a refund is provided after deducting cancellation charges. Refer to our refund policy on the website for more details.",
    },
    {
      id: 7,
      question: "How do I collect my ticket after booking online?",
      answer:
        "After successful reservation, you'll receive an e-ticket. You can either print the e-ticket or show the digital copy on your mobile device at the station to board the train. Make sure to carry a valid ID used during the reservation.",
    },
    {
      id: 8,
      question: "What do I do if I miss my train?",
      answer:
        "If you miss your train, you may be able to catch the next available one, depending on the type of ticket and seat availability. However, there may be additional charges or restrictions. Contact our customer support for assistance.",
    },
    {
      id: 9,
      question: "Are there discounts available for group bookings?",
      answer:
        "Yes, we offer discounts for group bookings. The criteria for group bookings may vary, so please check our website or contact our customer support for information on group discounts and eligibility.",
    },
    {
      id: 10,
      question: "How can I contact customer support for assistance?",
      answer:
        "You can contact our customer support through the helpline provided on our website or mobile app. We also offer support through email and live chat. Check the 'Contact Us' section for details.",
    },
  ];

  return (
    <>
      <div className="container text-center">
        <h1 className="display-1">FAQs !</h1>
        <hr />
        <div className="accordion" id="accordionExample">
          {railwayReservationFaqs.map((faq) => {
            return (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faqs;
