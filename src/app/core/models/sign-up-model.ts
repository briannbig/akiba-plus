export interface SignUpModel {
    id?: string,
    username: string,
    email: string,
    fullName: string,
    password: string,
    passwordConfirm: string,
    roles?: string[]

}
