using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Song
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int AlbumId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(450)")]
        public string Title { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(450)")]
        public string Url { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(450)")]
        public string ThumbnailUrl { get; set; }
    }
}
