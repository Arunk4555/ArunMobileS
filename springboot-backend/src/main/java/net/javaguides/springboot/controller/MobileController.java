package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Mobile;
import net.javaguides.springboot.repository.MobileRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/") // staned api which typicaly use in our http
public class MobileController {

	@Autowired //to inject this repositery to spring container
	private MobileRepository mobileRepository;
	
	//get all mobiles
	@GetMapping("/mobiles")
	public List<Mobile>getAllMobiles()
	{
		return mobileRepository.findAll();
	}
	//create mobile restApi
	@PostMapping("/mobiles")
	public Mobile createMobile(@RequestBody Mobile mobile) {      // Mobile is a return type and the name of the method is create mobile passing mobile object method argument request contains json body so request body
		return mobileRepository.save(mobile);                     //passing method argument as Mobile to return
	}
	
	//get mobile by id
	@GetMapping("/mobiles/{id}")
	public ResponseEntity<Mobile>  getMobileById(@PathVariable Long id) {
		Mobile mobile=mobileRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("mobile not found:"+id));
		return ResponseEntity.ok(mobile);
		
	}
	
	//update mobile 
	@PutMapping("/mobiles/{id}")
	public ResponseEntity<Mobile>updateMobile(@PathVariable Long id,@RequestBody Mobile mobileDetails){
		Mobile mobile=mobileRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("mobile not found:"+id));
		
		mobile.setDescription(mobileDetails.getDescription());
		mobile.setStock(mobileDetails.getStock());
		mobile.setProduct(mobileDetails.getProduct());
		
		 Mobile updatedMobile=mobileRepository.save(mobile);
		 return ResponseEntity.ok(updatedMobile);
		
	}
	  
	// Delete Employee
	@DeleteMapping("/mobiles/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteMobile(@PathVariable Long id){
		Mobile mobile=mobileRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("mobile not found:"+id));
		
		
		mobileRepository.delete(mobile);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
	 
	
}
