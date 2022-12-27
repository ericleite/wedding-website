import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

interface EventDetailsProps {
  attendees: string;
  attire?: string;
  location: string;
  locationHref?: string;
  name: string;
  start?: Date;
  stop?: Date;
}

export default function EventDetails({
  attendees,
  attire,
  location,
  locationHref,
  name,
  start,
  stop,
}: EventDetailsProps) {
  let locationWithAddress = <>{location}</>;

  if (locationHref) {
    locationWithAddress = (
      <OutboundLink href={locationHref} target="_blank">
        {location}
      </OutboundLink>
    );
  }

  return (
    <div className="text-center">
      <h6 className="mb-8">{name}</h6>
      <div className="space-y-0">
        <p className="font-bold">
          {start &&
            start.toLocaleTimeString('en-us', { hour12: true, timeStyle: 'short', timeZone: 'America/Los_Angeles' })}
          {stop && <> to </>}
          {stop &&
            stop.toLocaleTimeString('en-us', { hour12: true, timeStyle: 'short', timeZone: 'America/Los_Angeles' })}
        </p>
        <p>{locationWithAddress}</p>
        <p>{attendees} welcome</p>
        <p>{attire && <>{attire} attire</>}</p>
      </div>
    </div>
  );
}
