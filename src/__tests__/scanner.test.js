import scan from '../scanner';

const CALENDAR_WITH_ONE_EVENT =
`BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20130906T143000Z
DTEND:20130906T150000Z
END:VEVENT
END:VCALENDAR`;

const TEXT_WITH_FOLDED_LINE_BY_A_SPACE =
`DESCRIPTION:a line can 
 be folded`;

const TEXT_WITH_FOLDED_LINES_BY_A_SPACE_OR_TAB =
'DESCRIPTION:a line can \n be folded by a space\nDESCRIPTION:or by a \n\ttab';


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

  it('with line folded by space', () => {
    expect(scan(TEXT_WITH_FOLDED_LINE_BY_A_SPACE)).toEqual(
      [
        {kind: 'DESCRIPTION', value: 'a line can be folded'}
      ]
    );
  });

  it('with line folded by mixed whitespaces', () => {
    expect(scan(TEXT_WITH_FOLDED_LINES_BY_A_SPACE_OR_TAB)).toEqual(
      [
        {kind: 'DESCRIPTION', value: 'a line can be folded by a space'},
        {kind: 'DESCRIPTION', value: 'or by a tab'}
      ]
    );
  });
});