import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Будущее ИИ в веб-разработке",
      excerpt: "Как искусственный интеллект революционизирует создание современных веб-приложений и меняет подход к программированию.",
      category: "Искусственный интеллект",
      date: "15 августа 2024",
      readTime: "7 мин",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "TypeScript vs JavaScript в 2024",
      excerpt: "Сравнительный анализ преимуществ TypeScript для крупных проектов и когда стоит выбирать каждый из языков.",
      category: "Веб-разработка",
      date: "12 августа 2024", 
      readTime: "5 мин",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Микросервисы: плюсы и подводные камни",
      excerpt: "Практический опыт внедрения микросервисной архитектуры в стартапах и крупных IT-компаниях.",
      category: "Архитектура",
      date: "8 августа 2024",
      readTime: "10 мин", 
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { name: "Веб-разработка", count: 24, color: "bg-turquoise" },
    { name: "Искусственный интеллект", count: 18, color: "bg-coral" },
    { name: "DevOps", count: 15, color: "bg-lavender" },
    { name: "Мобильная разработка", count: 12, color: "bg-mint" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-turquoise to-coral rounded-lg flex items-center justify-center">
              <Icon name="Code" size={18} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
              TechBlog
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-turquoise transition-colors">Главная</a>
            <a href="#" className="text-muted-foreground hover:text-turquoise transition-colors">Статьи</a>
            <a href="#about" className="text-muted-foreground hover:text-turquoise transition-colors">О блоге</a>
            <a href="#" className="text-muted-foreground hover:text-turquoise transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск статей..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-turquoise via-coral to-mint bg-clip-text text-transparent">
                Современный
              </span>
              <br />
              IT Блог
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Исследуем новые технологии, делимся опытом разработки и следим за трендами в мире IT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-turquoise to-coral hover:opacity-90 text-white px-8 py-3 rounded-full text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
              <Button variant="outline" size="lg" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-3 rounded-full text-lg">
                <Icon name="Bell" size={20} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">Популярные статьи</h3>
            <Button variant="ghost" className="text-turquoise hover:text-coral">
              Все статьи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-card/50 backdrop-blur">
                <div className="aspect-video bg-gradient-to-br from-turquoise/20 to-coral/20 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/80 text-foreground border-0">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2 group-hover:text-turquoise transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Категории</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/70 backdrop-blur">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name="Folder" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-lg">{category.name}</h4>
                  <p className="text-muted-foreground">{category.count} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">О блоге</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TechBlog — это современная платформа для IT-специалистов, разработчиков и всех, 
                кто интересуется технологиями. Мы публикуем качественный контент о веб-разработке, 
                искусственном интеллекте, DevOps практиках и других актуальных темах.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша цель — создать сообщество, где можно найти экспертные статьи, практические советы 
                и новости из мира технологий. Каждая статья написана опытными специалистами и проверена 
                нашей редакцией.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-turquoise rounded-full"></div>
                  <span className="text-sm font-medium">100+ экспертных статей</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-coral rounded-full"></div>
                  <span className="text-sm font-medium">5000+ читателей</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-mint rounded-full"></div>
                  <span className="text-sm font-medium">Еженедельные обновления</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-turquoise/10 to-coral/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-turquoise to-coral rounded-2xl flex items-center justify-center">
                  <Icon name="Users" size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-turquoise to-coral">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-white">Подпишитесь на новости</h3>
            <p className="text-xl text-white/90">
              Получайте свежие статьи и IT-новости первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Ваш email" 
                className="flex-1 bg-white border-0"
              />
              <Button className="bg-white text-turquoise hover:bg-white/90 px-8">
                <Icon name="Send" size={16} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-turquoise to-coral rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={18} className="text-white" />
                </div>
                <h4 className="text-lg font-bold">TechBlog</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Современный IT блог о технологиях, разработке и новостях индустрии.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Разделы</h5>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Веб-разработка</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Искусственный интеллект</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">DevOps</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Мобильная разработка</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">О проекте</h5>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">О нас</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Авторы</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Контакты</a>
                <a href="#" className="block text-muted-foreground hover:text-turquoise transition-colors">Реклама</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">Соцсети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-turquoise hover:bg-turquoise/10">
                  <Icon name="Github" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-turquoise hover:bg-turquoise/10">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-turquoise hover:bg-turquoise/10">
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TechBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;