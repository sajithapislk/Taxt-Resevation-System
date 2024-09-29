﻿using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IUserService : IAuthMgtService
    {
        Task<AuthenticateResponse?> RegisterGuestAsync(UserRegisterRequest model);
    }
}
