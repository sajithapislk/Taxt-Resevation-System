using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class PasswordReset : AbstractRecord
    {
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        public string Code { get; set; }
        public DateTime ExpirationTime { get; set; }
    }
}
