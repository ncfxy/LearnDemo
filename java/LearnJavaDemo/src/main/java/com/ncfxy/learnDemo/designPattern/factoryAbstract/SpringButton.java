package com.ncfxy.learnDemo.designPattern.factoryAbstract;

//Spring按钮类：具体产品
class SpringButton implements Button {
    public void display() {
        System.out.println("显示浅绿色按钮。");
    }
}
