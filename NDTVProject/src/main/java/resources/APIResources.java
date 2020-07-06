package resources;

public enum APIResources {


	GETWeatherAPI("/data/2.5/weather");

	
	private String resource;

	APIResources(String resource) {
		
		this.resource=resource;
		
	}
	
	public String getResource()
	{
		return resource;
	}
	
}
