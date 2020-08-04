using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Album
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(450)")]
        public string UserId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Title { get; set; }
    }
}
