package pojo;

public class GetDetails {

	private String name;
	private GetCoord coord;
	private String weather;
	private String base;
	private GetMain main;
	private int  visibility;
	private GetWind wind;
	private GetClouds clouds;
	private int dt;
	private GetSys sys;
	private int timezone;
	private int id;
	private int cod;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public GetCoord getCoord() {
		return coord;
	}
	public void setCoord(GetCoord coord) {
		this.coord = coord;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public String getBase() {
		return base;
	}
	public void setBase(String base) {
		this.base = base;
	}
	public GetMain getMain() {
		return main;
	}
	public void setMain(GetMain main) {
		this.main = main;
	}
	public int getVisibility() {
		return visibility;
	}
	public void setVisibility(int visibility) {
		this.visibility = visibility;
	}
	public GetWind getWind() {
		return wind;
	}
	public void setWind(GetWind wind) {
		this.wind = wind;
	}
	public GetClouds getClouds() {
		return clouds;
	}
	public void setClouds(GetClouds clouds) {
		this.clouds = clouds;
	}
	public int getDt() {
		return dt;
	}
	public void setDt(int dt) {
		this.dt = dt;
	}
	public GetSys getSys() {
		return sys;
	}
	public void setSys(GetSys sys) {
		this.sys = sys;
	}
	public int getTimezone() {
		return timezone;
	}
	public void setTimezone(int timezone) {
		this.timezone = timezone;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCod() {
		return cod;
	}
	public void setCod(int cod) {
		this.cod = cod;
	}
}
