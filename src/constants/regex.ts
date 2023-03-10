// regex templates
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const descriptionRegex = /^.{1,500}$/;
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

// regex messages errors
export const emailInvalid       =( _type: string ) => _type.toLowerCase().includes("email"      ) && `please check your email`
export const passwordInvalid    =( _type: string ) => _type.toLowerCase().includes("password"   ) &&  `your password have to get only digits and letters, at least 8 characters, on uppercase, one lower case and one symbol`
export const userNameInvalid    =( _type: string ) => _type.toLowerCase().includes("name"       ) &&  `your name have to get at least 3 characters `
export const descriptionInvalid =( _type: string ) => _type.toLowerCase().includes("description") &&  `you put empty value`
export const urlInvalid         =( _type: string ) => _type.toLowerCase().includes("url"        ) &&  `you put empty value`

// regex validation
export function validateInput(type: string, value: string): boolean {
    if (type.toLowerCase().includes("email")) {
      return emailRegex.test(value);
    } else if (type.toLowerCase().includes("password")) {
      return passwordRegex.test(value);
    } else if (type.toLowerCase().includes("name")) {
      return usernameRegex.test(value);
    } else if (type.toLowerCase().includes("description")) {
      return descriptionRegex.test(value);
    } else if (type.toLowerCase().includes("url")) {
        return urlRegex.test(value);
    } else {
      throw new Error(`Invalid input type: ${type}`);
    }
  }
  