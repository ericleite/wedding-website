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
      <h6 className="mb-8 text-h6">{name}</h6>
      <div>
        <p className="font-bold">
          {start &&
            start.toLocaleTimeString('en-us', { hour12: true, timeStyle: 'short', timeZone: 'America/Los_Angeles' })}
          {stop && <> to </>}
          {stop &&
            stop.toLocaleTimeString('en-us', { hour12: true, timeStyle: 'short', timeZone: 'America/Los_Angeles' })}
        </p>
        <p className="mt-0">{locationWithAddress}</p>
        <p className="text-small mt-6">{attendees} welcome</p>
        <p className="italic text-small mt-6">{attire && <>{attire} attire</>}</p>
      </div>
    </div>
  );
}
