# build-Form
Form Builder App is a dynamic form builder built with React, Typescript, and Tailwind CSS. This application allows users to create custom forms and validate form submissions.

# Dependiencies
- nextjs: for framework building app; we use nextjs, why ? as a modern solid and performent front-end framework this is our framework used for.

-redux : [global state managment] ; for managment of data we used redux-toolkit as a strong data managment, and while nextjs don't conserve store at navigation wde add redux-persist to conserve data when getting navigation between interfaces.



# Folder-Structure

Build-Form/
├── README.md  
├── LICENSE  
├── next-env.d.tsx  
├── next.config.js  
├── package.json  
├── public  
├── src  
│&&&├── assets  
│&&&│&&&├── fonts  
│&&&│&&&├── icons  
│&&&│&&&└── images  
│&&&├── components  
│&&&│&&&├── generators  
│&&&│&&&|&&& ├── CheckBox.tsx  
│&&&│&&&|&&& ├── InputFiled.tsx  
│&&&│&&&|&&& ├── RadioBotton.tsx  
│&&&│&&&|&&& ├── SelectInput.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── utilities  
│&&&│&&&|&&& ├── FindComponet.tsx  
│&&&│&&&|&&& ├── FindStyle.tsx  
│&&&│&&&|&&& ├── FindValidation.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── others  
│&&&│&&&|&&& ├── ValidationSuccess.tsx  
│&&&│&&&|&&& ├── ValidationError.tsx  
│&&&│&&&|&&& ├── Bottons.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── home  
│&&&│&&&|&&& ├── Introduction.tsx  
│&&&│&&&|&&& ├── Description.tsx  
│&&&│&&&|&&& ├── Footer.tsx  
│&&&│&&&|&&& ├── Dependiencies.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── view  
│&&&│&&&|&&& ├── NavBar.tsx  
│&&&│&&&|&&& ├── Panel.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&└── index.tsx  
│&&&├── constants  
│&&&│&&&├── translations  
│&&&│&&&│&&&├── en.json  
│&&&│&&&│&&&└── index.ts  
│&&&│&&&├── mocks.ts  
│&&&│&&&├── initialData.ts  
│&&&│&&&├── regex.ts  
│&&&│&&&├── index.ts  
│&&&│&&&└── types  
│&&&│&&&&&& ├── interfaces.ts  
│&&&│&&&&&& ├── types.ts  
│&&&│&&&&&& └── index.ts  
│&&&├── pages  
│&&&│&&&├── test-redux  
│&&&│&&&│&&& └── index.tsx  
│&&&│&&&├── api  
│&&&│&&&├── _app.tsx  
│&&&│&&&├── _document.tsx  
│&&&│&&&└── index.tsx  
│&&&├── store  
│&&&│&&&├── reducers  
│&&&│&&&|&&& ├── blockReducer.ts  
│&&&│&&&|&&& ├── CheckBoxReducer.ts  
│&&&│&&&|&&& ├── fieldReducer.ts  
│&&&│&&&|&&& ├── formReducer.ts  
│&&&│&&&|&&& ├── inputFiledReducer.ts  
│&&&│&&&|&&& ├── radioBottonReducer.ts  
│&&&│&&&|&&& ├── selectInputReducer.ts  
│&&&│&&&|&&& └── index.ts  
│&&&│&&&├── rootReducer.ts  
│&&&│&&&└── store.ts  
│&&&└── Styles  
│&&&&&& ├── global.css  
│&&&&&& └── Home.modules.css  
└── tsconfig.json  
  
