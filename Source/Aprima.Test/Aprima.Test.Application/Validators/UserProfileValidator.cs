using Aprima.Test.Application.Models;
using FluentValidation;
using System.Text.RegularExpressions;

namespace Aprima.Test.Application.Validators
{
    public class UserProfileValidator : AbstractValidator<UserProfile>
    {
        public UserProfileValidator()
        {
            RuleFor(x => x.EmailAddress).EmailAddress();

            RuleFor(x => x.UserName).Must(userName => Regex.Match(userName, "^[a-zA-Z0-9]*$").Success == true);
            RuleFor(x => x.UserName).MinimumLength(8);

            RuleFor(x => x.Password).MinimumLength(10);
            RuleFor(x => x.Password).Must(password => password.Contains());

        }
    }
}
