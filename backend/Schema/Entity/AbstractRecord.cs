using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Schema.Entity
{
    public abstract class AbstractRecord
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int? CreatedUserId { get; set; }
        [ForeignKey(nameof(CreatedUserId))]
        public User? CreatedUser { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? LastModifiedUserId { get; set; }
        [ForeignKey(nameof(LastModifiedUserId))]
        public User? LastModifiedUser { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        public int? DeletedUserId { get; set; }
        [ForeignKey(nameof(DeletedUserId))]
        public User? DeletedUser { get; set; }
        public DateTime? DeletedDate { get; set; }
    }
}
