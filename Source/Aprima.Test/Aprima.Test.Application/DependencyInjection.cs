using Aprima.Test.Application.Models;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Aprima.Test.Application
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            
        }

        public static void RegisterFluentValidators(this IServiceCollection services)
        {
            services.AddTransient<IValidator<UserProfile>, PersonValidator>();
        }
    }
}
