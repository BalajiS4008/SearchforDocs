import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import { Calendar, WeekRule } from '@syncfusion/react-calendars';
import { useState } from 'react';

export default function App() {
    const [weekRule, setWeekRule] = useState<WeekRule>(WeekRule.FirstDay);

    const handleWeekRuleChange = (args: RadioButtonChangeEvent) => {
        setWeekRule(args.value as WeekRule);
    };

    return (
        <>
            <div className="component-section" style={{ display: 'flex',alignItems: 'center',  flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
                <div>
                    <strong>Week Rule:</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <RadioButton id="first-day" name='WeekRule' defaultChecked={true} value='FirstDay' label='First Day' onChange={(e) => handleWeekRuleChange(e)}></RadioButton>
                    <RadioButton id="first-full-week" name='WeekRule' value='FirstFullWeek' label='First Full Week' onChange={(e) => handleWeekRuleChange(e)}></RadioButton>
                    <RadioButton id="first-four-day-week" name='WeekRule' value='FirstFourDayWeek' label='First Four Day Week' onChange={(e) => handleWeekRuleChange(e)}></RadioButton>
                </div>
            </div>
            <div className="component-section">
                <Calendar defaultValue={new Date('01/01/2025')} weekNumber={true} showTodayButton={false} weekRule={weekRule}/>
            </div>
        </>
    );
}