%% Curlingvisualisering MoS-projekt 2014
%  Grupp 3
%  
%% Input
v0 = 3.2;
angle = -pi/28;

% Utslagsriktning ber�knas
rotationmatrix = [cos(angle) -sin(angle);
                  sin(angle) cos(angle)];
direction = rotationmatrix*[0;1];
direction = direction/(sqrt(direction(1,1)*direction(1,1)+direction(2,1)*direction(2,1)));
% Ortogonal riktning ber�knas
direction_ort = [cos(pi/2) -sin(pi/2);sin(pi/2) cos(pi/2)]*direction;

%% Fasta data
g = 9.82;
% Sten
m = 18;
r = 0.1454676;
r_inner = 0.1;
J = m*r*r/2;
% Isen
my = 0.0168;
my_rot = 0.0068; % Kolla denna... 
F_friktion = my*m*g;
F_friktion_rotation=my_rot*m*g;
% Banan
length = 36.59;                 % Fr�n hack till banans slut
width = 20;                     % Banans bredd
hackhog = 6.40;                 % Fr�n hack till hog
tee = [0;34.76];                % Koordinater f�r mitten av bot
% Tid och startposition och startvinkelhastighet(abs)
dt = 0.01;
t = 1:dt:40;
position = [0;0];
alpha = 0.02;                   % Tokh�ftat!
% Ber�knar tid mellan hack och hogg
t0 = hackhog/v0;

% Eftersom vi aldrig anv�nder vinkelhastighetens riktning och det blir
% fel i ber�kningen av omega l�ngre fram kan startvinkelhastigheten lika
% g�rna vara positiv (absbelopp) fr�n b�rjan
omega0 = pi / (2*t0); 
v0_p = omega0*r_inner;

% Ange friktionsriktningar beroende p� sikte
if  (-pi/2)<=angle<=0 % Curlar �t v�nster (sikte h�ger)
    c1 = 0.00001;
    c2 = -0.001;
elseif 0<angle<=(pi/2) % Curlar �t h�ger (sikte v�nster)
    c1 = -0.00001;
    c2 = 0.001;
end

%% Fast sten i bot som ritas ut 
positionZ=[-2;25];          % Position f�r sten i bot
plot(positionZ(1,1),positionZ(2,1),'ro')
hold on;


v_forw = v0;
v_p = v0_p;
omega = omega0;

%% Ber�kna och rita position f�r varje tid t, Euler
for t = 1:dt:40
    clf;
    % Ber�knar momentanhastigheten fram�t i vektor
    v_forw = v_forw - ((F_friktion/m) * dt);
    % Ber�knar momentanvinkelhastigheten i vektor
    omega = omega - J*alpha*dt; 
    % Kontrollera att hastigheten inte �r negativ
    if v_forw < 0 || omega < 0
        break;
    end
    
    % Kraft och hastighet i sidled
    F_side = (m*g*(c1+c2))/sqrt(abs(omega)*r);
    v_side =  (F_side/m)*t;
    
    % Resultant
    v = v_forw*direction + v_side*direction_ort;
    position = position + v*dt;
    
    
    % Om stenen g�r utanf�r p� l�ngden
    if position(2,1) > length 
        break;
    end    
    
    % Rita
    plot(position(1,1),position(2,1),'o')
    axis([-20 20 0 40])
    drawnow;
    pause(dt);
    hold on;
    
end

%Skriv ut position och hur l�ngt ifr�n tee stenen hamnat
position;
distance = sqrt((tee(1,1)-position(1,1))^2+(tee(2,1)-position(2,1))^2)
