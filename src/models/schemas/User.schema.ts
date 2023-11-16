import {ObjectId} from 'mongodb'

enum UserVerifySatus {
    Unverified, // chưa xác thực email, mặc định = 0/
    Verified, // đã xác thực email
    Banned // Bị khóa
}

interface UserType {
    _id?: ObjectId
    name?: string
    email: string
    data_of_birth?: Date
    password: string
    created_at?: Date
    updated_at?: Date
    email_verify_token?: string
    forgot_password_token?: string
    verify?: UserVerifySatus
    bio?: string
    location?: string
    website?: string
    username?: string
    avatar?: string
    cover_photo?: string
}

export default class User {
    _id?: ObjectId
    name: string
    email: string
    data_of_birth: Date
    password: string
    created_at: Date
    updated_at: Date
    email_verify_token: string
    forgot_password_token: string
    verify: UserVerifySatus
    bio: string
    location: string
    website: string
    username: string
    avatar: string
    cover_photo: string

    constructor(user: UserType) {
        this._id = user._id
        this.name = user.name || ""
        this.email = user.email
        this.data_of_birth = user.data_of_birth || new Date()
        this.password = user.password
        this.created_at = user.created_at || new Date()
        this.updated_at = user.updated_at || new Date()
        this.email_verify_token = user.email_verify_token || ""
        this.forgot_password_token = user.forgot_password_token || ""
        this.verify = user.verify || UserVerifySatus.Unverified
        this.bio = user.bio || ""
        this.location = user.location || ""
        this.website = user.website || ""
        this.username = user.username || ""
        this.avatar = user.avatar || ""
        this.cover_photo = user.cover_photo || ""
    }
}