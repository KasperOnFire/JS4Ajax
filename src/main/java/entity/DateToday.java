package entity;

import java.util.*;

public class DateToday {

    private int year;
    private int month;
    private int day;
    private int hour;
    private int minute;
    private int second;

    public DateToday() {
        Calendar c = Calendar.getInstance();

        this.year = Calendar.YEAR;
        this.month = Calendar.MONTH;
        this.day = Calendar.DAY_OF_MONTH;
        this.hour = Calendar.HOUR_OF_DAY;
        this.minute = Calendar.MINUTE;
        this.second = Calendar.SECOND;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    public int getMinute() {
        return minute;
    }

    public void setMinute(int minute) {
        this.minute = minute;
    }

    public int getSecond() {
        return second;
    }

    public void setSecond(int second) {
        this.second = second;
    }

}
