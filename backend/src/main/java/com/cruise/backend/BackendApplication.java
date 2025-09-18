package com.cruise.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

    // Time complexity: O(n) — every element is touched once.
    // Space complexity: O(1) — constant extra space.
    public void reverse (List<Integer> nums){
        for (int i = 0, j = nums.size() - 1; i < j; i++, j--) {
            Integer temp = nums.get(i);
            nums.set(i, nums.get(j));
            nums.set(j, temp);
        }
        System.out.println(nums);

    }

    public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

//        List<Integer> abc = new ArrayList<>(Arrays.asList(5, 6, 3, 4, 9));
//        BackendApplication obj = new BackendApplication();
//        obj.reverse(abc);
	}

}
