import React from 'react';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
`;

const EventCard = styled.div`
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
`;

const EventTitle = styled.h3`
  color: #34495e;
`;

const EventDate = styled.p`
  color: #16a085;
`;

const EventDescription = styled.p`
  color: #7f8c8d;
`;

const Events = () => {
  const sampleEvents = [
    {
      title: "Tech Conference 2024",
      date: "August 15, 2024",
      description: "Join us for a day of insightful talks and networking with leading tech industry experts."
    },
    {
      title: "Startup Pitch Fest",
      date: "October 10, 2024",
      description: "Watch as startups pitch their innovative ideas to a panel of venture capitalists."
    },
    {
      title: "Annual Marketing Summit",
      date: "November 25, 2024",
      description: "Explore the latest trends in digital marketing and grow your network at our annual summit."
    }
  ];

  return (
    <EventsWrapper>
      {sampleEvents.map((event, index) => (
        <EventCard key={index}>
          <EventTitle>{event.title}</EventTitle>
          <EventDate>{event.date}</EventDate>
          <EventDescription>{event.description}</EventDescription>
        </EventCard>
      ))}
    </EventsWrapper>
  );
};

export default Events;
