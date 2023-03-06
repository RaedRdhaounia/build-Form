# build-Form
Form Builder App is a dynamic form builder built with React, Typescript, and Tailwind CSS. This application allows users to create custom forms and validate form submissions.

# Dependiencies
- nextjs: for framework building app; we use nextjs, why ? as a modern solid and performent front-end framework this is our framework used for.

-redux : [global-statement-dataflow-management] ; for managment of data we used redux-toolkit as a strong data managment, and while nextjs don't conserve store at navigation wde add redux-persist to conserve data when getting navigation between interfaces.

-tailwinduiCSS : [Framework-CSS] ; for the component styles we used tailwindui as a new strong CSS library for faster and quick styles copmponents creation. simply used and more efficated.

- @heroicons/react: [icon-package] ; for icons we are using @heroicons/react that is perfectly consident with our design needs 

# Folder-Structure

Build-Form/
├── README.md  
├── LICENSE  
├── netlify.toml  
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
│&&&│&&&├── others  
│&&&│&&&|&&& ├── ValidationSuccess.tsx  
│&&&│&&&|&&& ├── ValidationError.tsx  
│&&&│&&&|&&& ├── Bottons.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── home  
│&&&│&&&|&&& ├── Introduction.tsx  
│&&&│&&&|&&& ├── LogoList.tsx  
│&&&│&&&|&&& ├── Quote.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── others  
│&&&│&&&|&&& ├── Save.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&├── utilities  
│&&&│&&&|&&& ├── Description.tsx  
│&&&│&&&|&&& ├── Divider.tsx  
│&&&│&&&|&&& └── index.tsx  
│&&&│&&&└── view  
│&&&│&&&&&&& ├── documentation  
│&&&│&&&&&&& ├── NavBar.tsx  
│&&&│&&&&&&& ├── Panel.tsx  
│&&&│&&&&&&& └── index.tsx  
│&&&├── constants  
│&&&│&&&├── defaultValues.ts  
│&&&│&&&├── regex.ts  
│&&&│&&&├── index.ts  
│&&&│&&&└── types  
│&&&│&&&&&& ├── interfaces.ts  
│&&&│&&&&&& ├── types.ts  
│&&&│&&&&&& └── index.ts  
│&&&├── pages  
│&&&│&&&├── component  
│&&&│&&&│&&& └── index.tsx  
│&&&│&&&├── documentation  
│&&&│&&&│&&& └── index.tsx  
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
│&&&&&& └── global.css  
├── tailwind.config.js  
├── postcss.config.ts
└── tsconfig.json  
  
