package net.javaguides.springboot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.model.Mobile;
import net.javaguides.springboot.repository.BookRepository;
import net.javaguides.springboot.repository.MobileRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class BookController {

	@Autowired
	private BookRepository bookRepository;

	// get all users
	@GetMapping("/bookings")
	public List<Book> getAllBooks() {
		return bookRepository.findAll();

	}

	// addcustomers
	
	  @PostMapping("/bookings") 
	  
	  public Book createBook(@RequestBody Book book) {
		  return bookRepository.save(book);
	  }

}
