import { MinMaxPoint, RadioContainer } from './style';
import { RadioButton } from './component/RadioButton';

export const DemoRadioGroup = () => {
  return (
    <>
      <RadioGroup
        name={'1'}
        title=' 1. การรักษากฎระเบียบและการมีวินัยในการทำงาน เข้าปฏิบัติงานตรงเวลา แต่งกายถูกต้องตามระเบียบบริษัท เขียนใบลาตามกฎระเบียบที่กำหนด'
      />
      <div className='mah-divider' role='separator'></div>
      <RadioGroup
        name={'2'}
        title='2. การปฏิบัติตามคำสั่งของผู้บังคับบัญชา ระเบียบวินัยในการทำงาน'
      />
      <div className='mah-divider' role='separator'></div>
      <RadioGroup
        name={'3'}
        title='3. การดูแลรักษาความสะอาดในสถานที่ทำงาน และดูแลทรัพย์สิน วัสดุอุปกรณ์ และเครื่องมือต่างๆ ของบริษัท'
      />
      <div className='mah-divider' role='separator'></div>
    </>
  );
};

const RadioGroup = ({ name, title }) => {
  return (
    <>
      <div style={{ fontSize: '16px' }}>{title}</div>
      <div style={{ marginTop: '20px' }} />
      <RadioContainer>
        <MinMaxPoint>1</MinMaxPoint>
        <RadioButton
          value={1}
          name={name}
          color={`rgb(9, 255, 0)`}
        ></RadioButton>
        <RadioButton
          value={2}
          name={name}
          color={`rgb(179, 255, 0)`}
        ></RadioButton>
        <RadioButton
          value={3}
          name={name}
          color={`rgb(230, 226, 35)`}
        ></RadioButton>
        <RadioButton
          value={4}
          name={name}
          color={`rgb(230, 168, 35)`}
        ></RadioButton>
        <RadioButton
          value={5}
          name={name}
          color={`rgb(230, 90, 35)`}
        ></RadioButton>
        <MinMaxPoint>5</MinMaxPoint>
      </RadioContainer>
    </>
  );
};
