import scan from '../scanner';

const CALENDAR_WITH_ONE_EVENT =
`BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20130906T143000Z
DTEND:20130906T150000Z
END:VEVENT
END:VCALENDAR`;

describe('scan', () => {
  it('with one event', () => {
    expect(scan(CALENDAR_WITH_ONE_EVENT)).toEqual(
      [
        {kind: 'BEGIN', value: 'VCALENDAR'},
        {kind: 'BEGIN', value: 'VEVENT'},
        {kind: 'DTSTART', value: '20130906T143000Z'},
        {kind: 'DTEND', value: '20130906T150000Z'},
        {kind: 'END', value: 'VEVENT'},
        {kind: 'END', value: 'VCALENDAR'}
      ]
    );
  });
});