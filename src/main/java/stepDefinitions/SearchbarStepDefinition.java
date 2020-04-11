package stepDefinitions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SearchbarStepDefinition {
	WebDriver driver;
	
	@Given("^url is www.Amazon.com$")
	public void url_is_www_Amazon_com()  {
		System.setProperty("webdriver.chrome.driver", "/Users/ibook/Desktop/Selenium Drivers/chromedriver");
		driver= new ChromeDriver();
		driver.get("https://www.Amazon.com");
		driver.manage().window().maximize();
	    }
	@When ("^User is already on login page$")
	public void user_is_already_on_login_page() {
		String title = driver.getTitle();
	    System.out.println("The homepage title is  "+title);
	   Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", title);
	}
	@And("^user should locate the searchbar$")
	public void user_should_locate_the_searchbar() {
	 String searchBar= driver.findElement(By.xpath("//input[@id=\"twotabsearchtextbox\"]")).getText();
	 System.out.println("Searchbar located "+searchBar);
	 Assert.assertEquals("", searchBar);
		
	    
	}

	@And("^user will click on the Amazon Searchbar$")
	public void user_will_click_on_the_Amazon_Searchbar()  {
	    driver.findElement(By.xpath("//input[@id=\"twotabsearchtextbox\"]")).click();
	    
	}
	
	@And("^user will be able to enter keywords into the searchbar$")
	public void user_will_be_able_to_enter_keywords_into_the_searchbar() {
	  driver.findElement(By.xpath("//input[@id=\"twotabsearchtextbox\"]")).sendKeys("samsung mobile");
	   
	}

	@Then("^user should be able to click on the search button$")
	public void user_should_be_able_to_click_on_the_search_button()  {
    driver.findElement(By.xpath("//input[@class=\"nav-input\"][@type=\"submit\"]")).click();
	    
	}

	@And("^user is on the designated search page$")
	public void user_is_on_the_designated_search_page() {
	   String mobilePage= driver.getTitle();
	   System.out.println(mobilePage);
	   Assert.assertEquals("Amazon.com : samsung mobile", mobilePage);
	   driver.close();
	   driver.quit();
	   
	}

}
