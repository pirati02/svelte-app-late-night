import {apiUrl} from '../api.config'

export class UserManagementService {
    async getUserInfo(userId) {
        return (await fetch(`${apiUrl}/crm/usermanagement/userInfoByUserId/${userId}/false`, {
            method: 'GET'
        }))?.json()
    }
}
