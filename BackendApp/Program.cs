var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Legg til CORS-tjenesten
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        builder.WithOrigins("http://localhost:8081") // React-dev server URL
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Legg til controller-tjenester
builder.Services.AddControllers();

var app = builder.Build();

// Bruk CORS-policyen
app.UseCors("AllowReactApp");

app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();