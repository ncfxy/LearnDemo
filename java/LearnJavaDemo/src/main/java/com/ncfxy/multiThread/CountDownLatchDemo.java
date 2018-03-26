package com.ncfxy.multiThread;

import java.util.concurrent.CountDownLatch;

public class CountDownLatchDemo {

    public static void main(String[] args) {
        final CountDownLatch latch = new CountDownLatch(3);
        Thread cacheService = new Thread(new TestService("CacheService", 3000, latch));
        Thread alertService = new Thread(new TestService("AlertService", 1000, latch));
        Thread validationService = new Thread(new TestService("ValidationService", 1000, latch));

        cacheService.start();
        alertService.start();
        validationService.start();

        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("All service are up, Application is starting now.");
    }
}

class TestService implements Runnable {
    private final String name;
    private final int timeToStart;
    private final CountDownLatch latch;

    public TestService(String name, int timeToStart, CountDownLatch latch) {
        this.name = name;
        this.timeToStart = timeToStart;
        this.latch = latch;
    }

    @Override
    public void run() {
        try {
            Thread.sleep(timeToStart);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(name + " is Up.");
        latch.countDown();
    }
}
