import React from 'react'
import UserProfile from './UserProfile'
import { User } from './user_info'

const UserProfileMap = () => {

  const data = User;
  return (
    <UserProfile data = {data} />
  )
}

export default UserProfileMap