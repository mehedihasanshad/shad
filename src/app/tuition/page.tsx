import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Award, BookOpen, Calculator } from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    title: "গণিত (Mathematics)",
    description: "প্লে থেকে এইচএসসি পর্যন্ত সকল শ্রেণীর গণিত - ইংরেজি ও বাংলা মাধ্যম উভয়ে",
    topics: ["বীজগণিত (Algebra)", "জ্যামিতি (Geometry)", "ত্রিকোণমিতি", "ক্যালকুলাস", "পরিসংখ্যান"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "পদার্থবিজ্ঞান (Physics)",
    description: "নবম-দশম, এসএসসি ও এইচএসসি পদার্থবিজ্ঞান - ব্যবহারিক উদাহরণ সহ",
    topics: ["বলবিদ্যা", "তাপগতিবিদ্যা", "তড়িৎ ও চুম্বক", "আলোকবিজ্ঞান", "আধুনিক পদার্থবিজ্ঞান"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BookOpen,
    title: "ইংরেজি (English)",
    description: "প্লে থেকে জাতীয় বিশ্ববিদ্যালয় অনার্স পর্যন্ত ইংরেজি - সকল দক্ষতা উন্নয়ন",
    topics: ["ব্যাকরণ (Grammar)", "রচনা (Composition)", "সাহিত্য (Literature)", "কথোপকথন", "পরীক্ষার প্রস্তুতি"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Calculator,
    title: "আইসিটি (ICT)",
    description: "এসএসসি ও এইচএসসি তথ্য ও যোগাযোগ প্রযুক্তি - তত্ত্ব ও ব্যবহারিক",
    topics: ["কম্পিউটার মূলনীতি", "প্রোগ্রামিং", "ডেটাবেস", "নেটওয়ার্কিং", "ওয়েব ডিজাইন"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: BookOpen,
    title: "সকল বিষয় (All Subjects)",
    description: "প্লে থেকে অষ্টম শ্রেণী পর্যন্ত সকল বিষয় - ইংরেজি ভার্সন ও বাংলা মাধ্যম",
    topics: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "ধর্ম"],
    color: "from-indigo-500 to-indigo-600",
  },
];

const features = [
  {
    icon: Users,
    title: "Personalized Learning",
    description: "One-on-one sessions tailored to your learning style and pace",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose times that work best for your schedule",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Track record of helping students achieve their academic goals",
  },
];

export default function Tuition() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              একাডেমিক এক্সিলেন্স{" "}
              <span className="text-cyan-300">ব্যক্তিগত শিক্ষার মাধ্যমে</span>
            </h1>
            <p className="text-base sm:text-lg text-cyan-100 mb-4 font-semibold">
              Founder of SUCCESSORS&apos; University Admissions Program & Ex-Head of Content Development, CampusX
            </p>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 md:mb-12 leading-relaxed px-4">
              গণিত ও পদার্থবিজ্ঞানে আপনার সম্ভাবনা উন্মোচন করুন বিশেষজ্ঞ
              গাইডেন্স এবং প্রমাণিত শিক্ষা পদ্ধতির মাধ্যমে
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                  ২০০+
                </div>
                <div className="text-blue-100 font-medium text-sm sm:text-base">
                  ছাত্রছাত্রী শিক্ষা দিয়েছি
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                  ৯৫%
                </div>
                <div className="text-blue-100 font-medium text-sm sm:text-base">
                  সফলতার হার
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                  ৫+
                </div>
                <div className="text-blue-100 font-medium text-sm sm:text-base">
                  বছরের অভিজ্ঞতা
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition CV Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Tuition CV</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">Download or view my tuition credentials (PDF format).</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Download Tuition CV"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Download CV
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="View Tuition CV in Google Drive"
            >
              <Button size="lg" variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                View in Google Drive
              </Button>
            </a>
          </div>
          <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" style={{ minHeight: 400 }}>
            <iframe
              src="https://drive.google.com/file/d/1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-/preview"
              width="100%"
              height="400"
              allow="autoplay"
              className="w-full h-[400px] border-0"
              title="Mehedi Hasan Shad Tuition CV"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              আমার শিক্ষা{" "}
              <span className="text-blue-600 dark:text-blue-400">দর্শন</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              প্রতিটি ছাত্রছাত্রী ভিন্নভাবে শেখে। আমি আমার শিক্ষা পদ্ধতি আপনার
              অনন্য প্রয়োজন অনুযায়ী মানিয়ে নিই।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-4xl w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ব্যক্তিগত শিক্ষা
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                সর্বোত্তম ফলাফলের জন্য আপনার গতি এবং পছন্দ অনুযায়ী আমার শিক্ষা
                পদ্ধতি মানিয়ে নেওয়া।
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white text-4xl w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ধারণাগত বোঝাপড়া
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                শুধু মুখস্থ নয়, সূত্র এবং ধারণার পিছনের &apos;কেন&apos; বোঝার
                উপর ফোকাস।
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white text-4xl w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ক্রমান্বয়ে শিক্ষা
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                জটিল বিষয়ে এগিয়ে যাওয়ার আগে শক্তিশালী ভিত্তি নিশ্চিত করে ধাপে
                ধাপে জ্ঞান তৈরি।
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white text-4xl w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                পরীক্ষায় উৎকর্ষতা
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                অনুশীলন পরীক্ষা, সময় ব্যবস্থাপনা এবং আত্মবিশ্বাস তৈরির মাধ্যমে
                কৌশলগত পরীক্ষার প্রস্তুতি।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">
              যে বিষয়গুলো আমি পড়াই
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              আপনার শেখার প্রয়োজন অনুযায়ী ব্যক্তিগত মনোযোগ সহ মূল বিষয়গুলিতে
              ব্যাপক টিউটরিং।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {subject.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {subject.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.map((topic, topicIndex) => (
                        <Badge
                          key={topicIndex}
                          variant="secondary"
                          className="text-sm"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">
              Why Choose My Tutoring?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Options */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              নমনীয় শিক্ষার বিকল্প
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              আপনার সুবিধা অনুযায়ী বিভিন্ন ধরনের ক্লাসের ব্যবস্থা
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  সরাসরি ক্লাস
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-6">
                  আরামদায়ক পরিবেশে সরাসরি মিথস্ক্রিয়া এবং তাৎক্ষণিক
                  প্রতিক্রিয়া সহ মুখোমুখি শিক্ষা।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ব্যক্তিগত মনোযোগ
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ইন্টারঅ্যাক্টিভ হোয়াইটবোর্ড সেশন
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      তাৎক্ষণিক সন্দেহ নিরসন
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      শারীরিক অধ্যয়ন উপকরণ
                    </span>
                  </li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                  <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ৳৮০০-১২০০
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300">
                    প্রতি সেশন
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  অনলাইন ক্লাস
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-6">
                  উচ্চ মানের ভিডিও সেশন, ডিজিটাল টুলস এবং নমনীয় সময়সূচী সহ
                  যেকোনো জায়গা থেকে শিখুন।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      নমনীয় সময়
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ডিজিটাল হোয়াইটবোর্ড
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      রেকর্ড করা সেশন
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      স্ক্রিন শেয়ারিং
                    </span>
                  </li>
                </ul>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                  <span className="block text-2xl font-bold text-green-600 dark:text-green-400">
                    ৳৬০০-১০০০
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300">
                    প্রতি সেশন
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  গ্রুপ ক্লাস
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-6">
                  ছোট গ্রুপে সহপাঠীদের সাথে শিখুন, আলোচনা এবং সহযোগিতামূলক
                  সমস্যা সমাধানে উৎসাহিত করুন।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ছোট গ্রুপ (৩-৫ জন ছাত্র)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      সহপাঠী শিক্ষা
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      সাশ্রয়ী
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      গ্রুপ আলোচনা
                    </span>
                  </li>
                </ul>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                  <span className="block text-2xl font-bold text-purple-600 dark:text-purple-400">
                    ৳৪০০-৬০০
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300">
                    প্রতি সেশন
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ক্লাসের সময়সূচী
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              আপনার সুবিধামতো সময়ে ক্লাসের ব্যবস্থা
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  সপ্তাহের দিন
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="text-blue-500 w-6 h-6" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      বিকাল ৪:০০ - সন্ধ্যা ৬:০০
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="text-blue-500 w-6 h-6" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      সন্ধ্যা ৭:০০ - রাত ৯:০০
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-center">
                  স্কুলের পরে শেখার জন্য উপযুক্ত
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  সপ্তাহান্তে
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Clock className="text-green-500 w-6 h-6" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      সকাল ১০:০০ - দুপুর ১২:০০
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Clock className="text-green-500 w-6 h-6" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      দুপুর ২:০০ - বিকাল ৪:০০
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Clock className="text-green-500 w-6 h-6" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      বিকাল ৫:০০ - সন্ধ্যা ৭:০০
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-center">
                  বর্ধিত সেশন উপলব্ধ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ছাত্রছাত্রীদের সফলতার গল্প
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              যারা আমার সাথে পড়াশোনা করে সফল হয়েছে তাদের কিছু মতামত
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    &quot;মেহেদী স্যার ক্যালকুলাসকে এত সহজ করে বুঝিয়েছেন! তার
                    ধাপে ধাপে পদ্ধতি আমাকে C থেকে A+ এ উন্নতি করতে সাহায্য
                    করেছে।&quot;
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      সারাহ আহমেদ
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400">
                      এইচএসসি ছাত্রী
                    </span>
                  </div>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    &quot;পদার্থবিজ্ঞানের যে ধারণাগুলো আগে অসম্ভব মনে হতো, এখন সেগুলো
                    একদম পরিষ্কার। ধৈর্য এবং চমৎকার শিক্ষার জন্য ধন্যবাদ!&quot;
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      রফিক হাসান
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400">
                      বিশ্ববিদ্যালয়ের ছাত্র
                    </span>
                  </div>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    &quot;অনলাইন ক্লাসগুলো খুবই সুবিধাজনক এবং কার্যকর ছিল। ডিজিটাল
                    হোয়াইটবোর্ড জটিল সমস্যাগুলো অনুসরণ করা সহজ করে তুলেছে।&quot;
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ফাতিমা খান
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400">
                      এসএসসি ছাত্রী
                    </span>
                  </div>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    &quot;Shad sir's classes made math fun and easy! I never thought I could enjoy calculus until now.&quot;
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Tanvir Rahman
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400">
                      University Student
                    </span>
                  </div>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What subjects do you tutor?</h3>
              <p className="text-gray-700 dark:text-gray-300">Mathematics, Physics, English, ICT, and all subjects up to class 8 (Bangla & English version).</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Are classes online or in-person?</h3>
              <p className="text-gray-700 dark:text-gray-300">Both options are available. You can choose what works best for you.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I book a trial class?</h3>
              <p className="text-gray-700 dark:text-gray-300">Click the "Book Trial Class" button or contact me directly via email or phone.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What is your teaching style?</h3>
              <p className="text-gray-700 dark:text-gray-300">Personalized, step-by-step, and focused on building strong concepts and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-400 to-cyan-300 text-blue-900 dark:text-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            আপনার পড়াশোনায় এক্সিলেন্স অর্জনের জন্য প্রস্তুত?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            শত শত সফল ছাত্রছাত্রীর সাথে যোগ দিন যারা ব্যক্তিগত টিউটরিং এর
            মাধ্যমে তাদের একাডেমিক লক্ষ্য অর্জন করেছে।
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-gray-700 font-semibold shadow-lg"
            >
              বিনামূল্যে ট্রায়াল ক্লাস বুক করুন
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-200 dark:border-gray-700 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-800 dark:hover:text-blue-100 font-semibold"
            >
              সময়সূচী দেখুন
            </Button>
          </div>
          <div className="flex justify-center items-center gap-4 text-white text-lg opacity-90">
            <Check className="w-6 h-6" />
            <span>
              ১০০% সন্তুষ্টির গ্যারান্টি - প্রথম ক্লাস সবসময় বিনামূল্যে!
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
