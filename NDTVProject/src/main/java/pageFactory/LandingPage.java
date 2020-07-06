package pageFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LandingPage {

	public WebDriver driver;
	
	public LandingPage(WebDriver driver) {
		
		this.driver=driver;
	}
	
	private By logo = By.cssSelector("[class='ndtvlogo']");
	


	public WebElement getLogo()
	{
		return driver.findElement(logo);
	}
	
	public String getNDTVTitle()
	{
		return driver.getTitle();
	}
}
