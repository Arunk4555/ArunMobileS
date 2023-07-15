package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Booking")
public class Book {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	@Column(name="productname")
	private String productname;
	@Column(name="username")
	private String username;
	@Column(name="contactnumber")
	private Long contactnumber;
	@Column(name="upitranscationId")
	private String upitranscationId;
	
	
	public Book() {
		
	}
	
	
	public Book(String productname, String username, Long contactnumber, String uPItranscationId) {
		super();
		this.productname = productname;
		this.username = username;
		this.contactnumber = contactnumber;
		upitranscationId = upitranscationId;
	}
	
	 public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getContactnumber() {
		return contactnumber;
	}
	public void setContactnumber(Long contactnumber) {
		this.contactnumber = contactnumber;
	}
	public String getupitranscationId() {
		return upitranscationId;
	}
	public void setupitranscationId(String upitranscationId) {
		upitranscationId = upitranscationId;
	}
	
	

}
