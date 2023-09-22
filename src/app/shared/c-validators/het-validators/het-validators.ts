import { decorateAsyncValidator, decorateValidator } from "./decorators/decorate-validator";
import { uniqueValidator } from "./validators/unique/unique.validator";
import { uniqueDefaultConfig } from "./validators/unique/unique.config";
import { maxNumberValidator } from "./validators/max-number/max-number.validator";
import { maxNumberDefaultConfig } from "./validators/max-number/max-number.config";
import { minNumberValidator } from "./validators/min-number/min-number.validator";
import { minNumberDefaultConfig } from "./validators/min-number/min-number.config";
import { maxDateValidator } from "./validators/max-date/max-date.validator";
import { maxDateDefaultConfig } from "./validators/max-date/max-date.config";
import { minDateValidator } from "./validators/min-date/min-date.validator";
import { minDateDefaultConfig } from "./validators/min-date/min-date.config";
import { minLengthValidator } from "./validators/min-length/min-length.validator";
import { minLengthDefaultConfig } from "./validators/min-length/min-length.config";
import { maxLengthValidator } from "./validators/max-length/max-length.validator";
import { maxLengthDefaultConfig } from "./validators/max-length/max-length.config";
import { alphaValidator } from "./validators/alpha/alpha.validator";
import { alphaDefaultConfig } from "./validators/alpha/alpha.config";
import { alphaDigitValidator } from "./validators/alpha-digit/alpha-digit.validator";
import { alphaDigitDefaultConfig } from "./validators/alpha-digit/alpha-digit.config";
import { requiredValidator } from "./validators/required/required.validator";
import { requiredDefaultConfig } from "./validators/required/required.config";
import { factorValidator } from "./validators/factor/factor.validator";
import { factorDefaultConfig } from "./validators/factor/factor.config";
import { patternValidator } from "./validators/pattern/pattern.validator";
import { patternDefaultConfig } from "./validators/pattern/pattern.config";
import { autocompleteSearchValidator } from "./validators/autocomplete-search/autocomplete-search.validator";
import { arrayFieldListValidator } from "./validators/array-field-list/array-field-list.validator";
import { arrayFieldListDefaultConfig } from "./validators/array-field-list/array-field-list.config";
import { groupCheckValidator } from "@shared/helpers/het-validators/validators/group-check/group-check.validator";
import { groupCheckConfig } from "@shared/helpers/het-validators/validators/group-check/group-check.config";
import { customValidator } from "@shared/helpers/het-validators/validators/custom/custom.validators";
import { customDefaultConfig } from "@shared/helpers/het-validators/validators/custom/custom.config";
import { lengthValidator } from "@shared/helpers/het-validators/validators/length/length.validator";
import { lengthDefaultConfig } from "@shared/helpers/het-validators/validators/length/length.config";

export class HetValidators {
  static autocompleteSearch: typeof autocompleteSearchValidator = decorateAsyncValidator(autocompleteSearchValidator);
  static alpha: typeof alphaValidator = decorateValidator(alphaValidator, alphaDefaultConfig);
  static alphaDigit: typeof alphaDigitValidator = decorateValidator(alphaDigitValidator, alphaDigitDefaultConfig);
  static arrayFieldList: typeof arrayFieldListValidator = decorateValidator(arrayFieldListValidator, arrayFieldListDefaultConfig);
  static custom: typeof customValidator = decorateValidator(customValidator, customDefaultConfig);
  static factor: typeof factorValidator = decorateValidator(factorValidator, factorDefaultConfig);
  static groupCheck: typeof groupCheckValidator = decorateValidator(groupCheckValidator, groupCheckConfig);
  static len: typeof lengthValidator = decorateValidator(lengthValidator, lengthDefaultConfig);
  static maxNumber: typeof maxNumberValidator = decorateValidator(maxNumberValidator, maxNumberDefaultConfig);
  static minNumber: typeof minNumberValidator = decorateValidator(minNumberValidator, minNumberDefaultConfig);
  static maxDate: typeof maxDateValidator = decorateValidator(maxDateValidator, maxDateDefaultConfig);
  static minDate: typeof minDateValidator = decorateValidator(minDateValidator, minDateDefaultConfig);
  static minLength: typeof minLengthValidator = decorateValidator(minLengthValidator, minLengthDefaultConfig);
  static maxLength: typeof maxLengthValidator = decorateValidator(maxLengthValidator, maxLengthDefaultConfig);
  static unique: typeof uniqueValidator = decorateValidator(uniqueValidator, uniqueDefaultConfig);
  static required: typeof requiredValidator = decorateValidator(requiredValidator, requiredDefaultConfig);
  static pattern: typeof patternValidator = decorateValidator(patternValidator, patternDefaultConfig);
}
