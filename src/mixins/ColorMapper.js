const colorMapper = {
  methods: {
    getFontColorClass(color) {
      const prefix = 'color-';
      if (this.isValidColor(color)) {
        return `${prefix}${color}`;
      } else {
        return `${prefix}default`;
      }
    },
    getBgColorClass(color) {
      const prefix = 'bg-';
      if (this.isValidColor(color)) {
        return `${prefix}${color}`;
      } else {
        return `${prefix}default`;
      }
    },
    isValidColor(color) {
      return [
          'red', 
          'orange', 
          'yellow', 
          'green', 
          'turqoise', 
          'blue', 
          'purple', 
          'magenta'].includes(color);
    }
  }
}

export default colorMapper;