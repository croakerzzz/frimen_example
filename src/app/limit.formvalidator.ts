import {AbstractControl, FormControl, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

export class LimitValidator {

    static limit(limit:number): ValidatorFn {
        return (control:AbstractControl) : ValidationErrors | null => {
            let val = Number(control.value);
            if (!isNaN(val) && val > limit) {
                return {"limit": {"limit": limit, "actualValue": val}};
            } else {
                return null;
            }
        }
    }

}