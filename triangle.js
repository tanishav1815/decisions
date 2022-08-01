// Check whether the triangle is Acute or Obtuse


const Triangle_Check = (A,B,C) => {
    if (A>90 || B>90 || C>90) {
      return "obtuse";
    }
    
    else {
      return "acute";
    }

    
};

