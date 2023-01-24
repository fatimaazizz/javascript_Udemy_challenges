const mark={
    fullName:"Mark Miller",
    mass:78,
    tall:1.69,
    calcBMI:function ()
    {this.BMI=this.mass/(this.tall**2);
        return this.BMI;
    }
}
const John={
    fullName:"John Smith)",
    mass:92,
    tall:1.95,
    calcBMI:function ()
    {   this.BMI=this.mass/(this.tall**2);
        return this.BMI;
    }
   
}
John.calcBMI()>mark.calcBMI()?
console.log(`${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`):
console.log(`${mark.fullName}'s (${mark.calcBMI()}) is higher than ${John.fullName}'s BMI (${John.calcBMI()})!`);