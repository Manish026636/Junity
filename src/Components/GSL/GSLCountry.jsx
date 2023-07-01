import React from 'react';

const GSLCountry = () => {
  const data = [
    {
    Srno: '1',
    imageUrl: "india.png", 
    label: "INDIA",
    DelegateName: 'Manish Kumar',
    Onspeech: 'Start',
    Ofspeech: 'Stop',
    },
    {
        Srno: '2',
        imageUrl: "usa.png", label: "USA",
        DelegateName: 'Joe Denver',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '3',
        imageUrl: "australlia.png", 
        label: "AUSTRALLIA",
        DelegateName: 'Anite Lopea',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '4',
        imageUrl: "russia.png",
         label: "RUSSIA",
      DelegateName: 'Nikita Schewn',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '5',
        imageUrl: "france.png", 
        label: "FRANCE",
        DelegateName: 'Frendo Gresoa',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '6',
        imageUrl: "germany.png", 
        label: "GERMANY",
        DelegateName: 'Himola Totpa',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '7',
        imageUrl: "india.png", 
        label: "INDIA",
        DelegateName: 'Manish Kumar',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '8',
        imageUrl: "france.png", 
        label: "FRANCE",
        DelegateName: 'Frendo Gresoa',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
  ];

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg bg-[#2194FF] text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.no
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
           
            <th scope="col" className="px-6 py-3">
              Delegate Name
            </th>
            <th scope="col" className="px-6 py-3">
              Speech Action
            </th>
            <th scope="col" className="px-6 py-3">
              Feedback Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <th scope="row" className="px-6 py-4 text-lg font-bold text-[#4D4D4D]">
                {item.Srno}
              </th>
              <td className="px-6 py-1">
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-8 h-8 border border-gray-300 rounded-full"
                    />
                    <span className="ml-3 text-[#6F6F6F] font-bold text-lg">{item.label}</span>
                  </div>
                </td>
              <td className="px-6 py-4 text-[#6F6F6F] font-semibold text-lg">{item.DelegateName}</td>
              <td className="px-6 py-2 "><button class=" py-0.5 px-6 text-lg  text-white font-semibold bg-black rounded-xl hover:bg-blue-700"> {item.Onspeech}</button>
             </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GSLCountry;
