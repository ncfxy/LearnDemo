package com.ncfxy.learnDemo.designPattern.factorySimple.chartExample;

public class ChartExample {

    public static void main(String[] args) {
        Chart chart;
        chart = ChartFactory.getChart("histogram"); //通过静态工厂方法创建产品
        chart.display();
    }

}
