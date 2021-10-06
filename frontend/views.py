from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json

from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.http import HttpResponse

def test(request):
  return HttpResponse("test")

# Create your views here.
@csrf_exempt
def index(request):
  if request.method == "POST":
    # print(json.loads(request.body.decode('utf-8')))
    print(list(request.POST.keys())[0].strip())
    # print(request.POST)
    # print(request.POST["programStudi"])

    print(request.GET)
    print(request.FILES)

    data = json.loads(list(request.POST.keys())[0].strip())
    print("-"*30)
    print(data)
    print(type(data))
    print(data.keys())
    programStudi = data["programStudi"]
    hargaProgram = data["hargaProgram"]
    namaLengkap = data["namaLengkap"]
    alamatLengkap = data["alamatLengkap"]
    tanggal = data["tanggal"]
    bulan = data["bulan"]
    tahun = data["tahun"]
    jenisKelamin = data["jenisKelamin"]
    noTelp = data["noTelp"]
    email = data['email']
    # programStudi = request.POST["programStudi"]
    # hargaProgram = request.POST["hargaProgram"]
    # namaLengkap = request.POST["namaLengkap"]
    # alamatLengkap = request.POST["alamatLengkap"]
    # tanggal = request.POST["tanggal"]
    # bulan = request.POST["bulan"]
    # tahun = request.POST["tahun"]
    # jenisKelamin = request.POST["jenisKelamin"]
    # noTelp = request.POST["noTelp"]
    # email = request.POST['email']
    # print("-"*30)
    # print(cart_list)
    print("-"*30)
    print(email)
    
    mail_subject = 'Pendaftaran Berhasil'
    message = render_to_string('email/application_success.html', {
         'programStudi': programStudi,
         'hargaProgram': hargaProgram,
         'namaLengkap': namaLengkap,
         'alamatLengkap': alamatLengkap,
         'tanggal': tanggal,
         'bulan': bulan,
         'tahun': tahun,
         'jenisKelamin': jenisKelamin,
         'noTelp': noTelp
    })
    message_strip = strip_tags(message)
    to_email = email
    email_send = EmailMultiAlternatives(
        mail_subject, message_strip, settings.EMAIL_HOST_USER, [to_email]
    )
    email_send.attach_alternative(message, "text/html")
    email_send.fail_silently = False
    email_send.send()
  return render(request, 'frontend/index.html')

# def daftar(request):
#   if request.method == "POST":
#     print(request.POST)
#     print(request.GET)
#     print(request.FILES)
#     programStudi = request.POST["programStudi"]
#     hargaProgram = request.POST["hargaProgram"]
#     namaLengkap = request.POST["namaLengkap"]
#     alamatLengkap = request.POST["alamatLengkap"]
#     tanggal = request.POST["tanggal"]
#     bulan = request.POST["bulan"]
#     tahun = request.POST["tahun"]
#     jenisKelamin = request.POST["jenisKelamin"]
#     noTelp = request.POST["noTelp"]
#     email = request.POST['email']
#     # print("-"*30)
#     # print(cart_list)
#     # print("-"*30)
#     # print(email)
    
#     mail_subject = 'Pendaftaran Berhasil'
#     message = render_to_string('email/application_success.html', {
#          'programStudi': programStudi,
#          'hargaProgram': hargaProgram,
#          'namaLengkap': namaLengkap,
#          'alamatLengkap': alamatLengkap,
#          'tanggal': tanggal,
#          'bulan': bulan,
#          'tahun': tahun,
#          'jenisKelamin': jenisKelamin,
#          'noTelp': noTelp
#     })
#     message_strip = strip_tags(message)
#     to_email = email
#     email_send = EmailMultiAlternatives(
#         mail_subject, message_strip, settings.EMAIL_HOST_USER, [to_email]
#     )
#     email_send.attach_alternative(message, "text/html")
#     email_send.fail_silently = False
#     email_send.send()
    
#   return render(request, 'email/application_success.html', {})