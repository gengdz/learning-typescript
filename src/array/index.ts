type StringOrNumber = string | number;
interface IOption {
  label: string;
  value: StringOrNumber;
  [propsName: string]: StringOrNumber;
}

const dictionaryList: IOption[] = [
  { label: '阿里巴巴', value: 'ali' },
  { label: '今日头条', value: 'v', description: 'news' }
];

const getAli = (list: IOption[]) => list.filter(item => item.value === 'ali');

console.log(getAli(dictionaryList));

export { getAli };
