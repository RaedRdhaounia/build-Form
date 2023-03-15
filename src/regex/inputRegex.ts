export const email = `^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`
export const password = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$`
export const fullName = `^[A-Za-z]+\s[A-Za-z]+$`
export const description = `^.{1,255}$`

export function getTextInput(_label: string){
  const type = _label.toLowerCase()
  if (type.includes("password")) {
    return {type: "password", pattern: password   , title: "password have at least 8 characters long, contains at least 1 uppercase letter, 1 lowercase letter, and 1 number."}
  } 
  if (type.includes("email")) {
    return {type: "email"   , pattern: email      , title: "email is not valid"}
  }
  if (type.includes("name")) {
    return {type: "text"    , pattern: fullName   , title: " your name is not valid"}
  }
  if (type.includes("description")) {
    return {type :"text"    , pattern: description, title: " please do not let your text empty"}
  }
  return {type :"text"    , pattern: description, title: "text havent be empty"}
}