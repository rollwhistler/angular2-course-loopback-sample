import { FormControl } from '@angular/forms';

export function testValidator(input: FormControl) {
    //value length > 8
    if(input.value.length <= 8) return {"testValidator":"length"};
    //value contains at least one number
    if(!/\d/.test(input.value)) return {"testValidator":"missing_number"};

    return null;
}