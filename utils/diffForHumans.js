(function () {
    function diffforHumans(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffInMilliseconds = Math.abs(now - date);
  
      // Menentukan selisih waktu dalam detik, menit, jam, hari, bulan, atau tahun
      const seconds = Math.floor(diffInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);
  
      if (years > 0) {
        return `${years} tahun yang lalu`;
      } else if (months > 0) {
        return `${months} bulan yang lalu`;
      } else if (days > 0) {
        return `${days} hari yang lalu`;
      } else if (hours > 0) {
        return `${hours} jam yang lalu`;
      } else if (minutes > 0) {
        return `${minutes} menit yang lalu`;
      } else {
        return `${seconds} detik yang lalu`;
      }
    }
  
    // Menambahkan metode baru ke objek Date
    Date.prototype.diffforHumans = function () {
      return diffforHumans(this);
    };
  })();
  