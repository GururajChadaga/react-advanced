import { useEffect, useMemo, useState } from 'react';
import './styles.css';

const getCountryIds = (countries) => {
  return countries.map((country) => country.id);
};

export default function App() {
  /* Requirements:
    1) When you select the first checkbox having label 'Select All', all the checkbox should get checked and when you uncheck 'Select All', each of the checkbox should be unchecked.
    2) If all checkbox is checked and you uncheck any checkbox having label of any country name, Checkbox for Select All should also be unchecked.
    3) On checking all the countries, Select All checkbox should be checked automatically. 
  */

  const countries = useMemo(
    () => [
      {
        id: 1,
        countryName: 'India',
      },
      {
        id: 2,
        countryName: 'USA',
      },
      {
        id: 3,
        countryName: 'France',
      },
    ],
    []
  );

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedCountries, setCheckedCountries] = useState([]);

  useEffect(() => {
    setIsAllChecked(checkedCountries.length === countries.length);
  }, [checkedCountries, countries]);

  const handleCheckBoxToggle = (countryId) => {
    if (checkedCountries.includes(countryId)) {
      setCheckedCountries((prevCheckedCountries) => {
        return prevCheckedCountries.filter(
          (prevCountryId) => countryId !== prevCountryId
        );
      });
    } else {
      setCheckedCountries((prevCheckedCountries) => [
        ...prevCheckedCountries,
        countryId,
      ]);
    }
  };

  const handleCheckAll = () => {
    setIsAllChecked((prevIsAllChecked) => {
      const toggled = !prevIsAllChecked;
      if (toggled) {
        setCheckedCountries([...getCountryIds(countries)]);
      } else {
        setCheckedCountries([]);
      }
      return toggled;
    });
  };

  return (
    <div className='App'>
      <div>
        <input
          type='checkbox'
          checked={isAllChecked}
          onClick={handleCheckAll}
        />
        Select All
      </div>

      {countries.map((country) => (
        <div id={country.id}>
          <input
            type='checkbox'
            checked={checkedCountries.includes(country.id)}
            onClick={() => {
              handleCheckBoxToggle(country.id);
            }}
          />
          {country.countryName}
        </div>
      ))}
    </div>
  );
}
