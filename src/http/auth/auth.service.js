import {apiUrl} from '../api.config'

export class AuthService {
    login = async (loginRequest) => {
        return (await fetch(`${apiUrl}/crm/authorize/login`, {
            method: 'POST',
            body: JSON.stringify(loginRequest)
        }))?.json()
    }
}
